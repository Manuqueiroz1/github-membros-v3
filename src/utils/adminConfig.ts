// 🔧 CONFIGURAÇÃO DE ADMINISTRADORES
// Adicione os e-mails dos administradores aqui

export const ADMIN_EMAILS = [
  'admin@teacherpoli.com',
  'suporte@teacherpoli.com',
  'manu@teacherpoli.com',
  'poli@teacherpoli.com',
  // Adicione mais e-mails de administradores conforme necessário
];

export const ADMIN_PERMISSIONS = {
  SUPER_ADMIN: ['edit_content', 'add_lessons', 'manage_users', 'edit_bonuses', 'manage_settings'],
  CONTENT_ADMIN: ['edit_content', 'add_lessons', 'edit_bonuses'],
  SUPPORT_ADMIN: ['edit_content', 'manage_users']
};

// Sistema de acesso manual para usuários sem compra na Hotmart
export interface ManualAccessUser {
  email: string;
  name: string;
  grantedBy: string; // Email do admin que liberou
  grantedAt: Date;
  reason: string; // Motivo da liberação (bônus, gratuito, etc.)
  expiresAt?: Date; // Data de expiração (opcional)
  isActive: boolean;
}

// Carregar usuários com acesso manual
export function getManualAccessUsers(): ManualAccessUser[] {
  try {
    const saved = localStorage.getItem('teacherpoli_manual_access_users');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Erro ao carregar usuários com acesso manual:', error);
    return [];
  }
}

// Salvar usuários com acesso manual
export function saveManualAccessUsers(users: ManualAccessUser[]): void {
  try {
    localStorage.setItem('teacherpoli_manual_access_users', JSON.stringify(users));
    // Disparar evento para atualizar outras partes da aplicação
    window.dispatchEvent(new CustomEvent('manualAccessUpdated'));
  } catch (error) {
    console.error('Erro ao salvar usuários com acesso manual:', error);
  }
}

// Verificar se usuário tem acesso manual
export function hasManualAccess(email: string): boolean {
  const manualUsers = getManualAccessUsers();
  const user = manualUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
  
  if (!user || !user.isActive) {
    return false;
  }
  
  // Verificar se não expirou
  if (user.expiresAt && new Date() > new Date(user.expiresAt)) {
    return false;
  }
  
  return true;
}

// Adicionar usuário com acesso manual
export function grantManualAccess(
  email: string, 
  name: string, 
  grantedBy: string, 
  reason: string, 
  expiresAt?: Date
): boolean {
  try {
    const manualUsers = getManualAccessUsers();
    
    // Verificar se já existe
    const existingIndex = manualUsers.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
    
    const newUser: ManualAccessUser = {
      email: email.toLowerCase(),
      name,
      grantedBy,
      grantedAt: new Date(),
      reason,
      expiresAt,
      isActive: true
    };
    
    if (existingIndex >= 0) {
      // Atualizar usuário existente
      manualUsers[existingIndex] = newUser;
    } else {
      // Adicionar novo usuário
      manualUsers.push(newUser);
    }
    
    saveManualAccessUsers(manualUsers);
    return true;
  } catch (error) {
    console.error('Erro ao conceder acesso manual:', error);
    return false;
  }
}

// Revogar acesso manual
export function revokeManualAccess(email: string): boolean {
  try {
    const manualUsers = getManualAccessUsers();
    const userIndex = manualUsers.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (userIndex >= 0) {
      manualUsers[userIndex].isActive = false;
      saveManualAccessUsers(manualUsers);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Erro ao revogar acesso manual:', error);
    return false;
  }
}

export function isAdmin(email: string): boolean {
  return ADMIN_EMAILS.includes(email.toLowerCase());
}

export function getAdminPermissions(email: string): string[] {
  if (!isAdmin(email)) return [];
  
  // Por padrão, todos os admins têm permissões completas
  // Você pode personalizar isso conforme necessário
  return ADMIN_PERMISSIONS.SUPER_ADMIN;
}

export function hasPermission(email: string, permission: string): boolean {
  const permissions = getAdminPermissions(email);
  return permissions.includes(permission);
}