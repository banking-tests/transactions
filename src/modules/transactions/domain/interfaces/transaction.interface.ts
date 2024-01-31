import { ResourceProps } from '@/core/domain/interfaces/resource-props.interface';
import { Merchant } from '@/modules/transactions/domain/interfaces/merchant.interface';

export interface Transaction extends ResourceProps {
  account: string[];
  accounting_date: Date;
  amount: number;
  balance: number;
  category: string;
  collected_at: Date;
  currency: string;
  description: string;
  id: string;
  internal_identification: string;
  merchant: Merchant;
  observations?: string;
  reference: string;
  status: string;
  subcategory?: string;
  type: string;
  value_date: Date;
}
