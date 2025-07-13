// Re-export all types from different modules
export * from "./blog";

// Common UI types
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}

// Form types
export interface FormFieldProps {
  label?: string;
  error?: string;
  required?: boolean;
}

// Navigation types
export interface NavItem {
  title: string;
  href: string;
  icon?: React.ComponentType;
  external?: boolean;
}

// Avatar types
export type AvatarOwner = 'nils' | 'thuan';
export type AvatarSize = 'sm' | 'md' | 'lg';