import { ResourceDocument } from '@/core/infrastructure/models/resource-document';
import { Merchant } from '@/modules/transactions/domain/interfaces/merchant.interface';
import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'transactions', timestamps: true, autoCreate: true, autoIndex: true })
export class TransactionModel extends ResourceDocument {
  @Prop({ type: [String], index: true })
  public account: string[];

  @Prop({ type: Date, index: true })
  public accounting_date: Date;

  @Prop({ type: Number })
  public amount: number;

  @Prop({ type: Number })
  public balance: number;

  @Prop({ type: String, index: true })
  public category: string;

  @Prop({ type: Date, index: true })
  public collected_at: Date;

  @Prop({ type: String, index: true })
  public currency: string;

  @Prop({ type: String })
  public description: string;

  @Prop({ type: String, index: true })
  public id: string;

  @Prop({ type: String })
  public internal_identification: string;

  @Prop({ type: Object })
  public merchant: Merchant;

  @Prop({ type: String })
  public observations?: string;

  @Prop({ type: String })
  public reference: string;

  @Prop({ type: String, index: true })
  public status: string;

  @Prop({ type: String, index: true })
  public subcategory?: string;

  @Prop({ type: String, index: true })
  public type: string;

  @Prop({ type: Date, index: true })
  public value_date: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(TransactionModel);

export const Transactions: ModelDefinition = {
  name: TransactionModel.name,
  schema: TransactionSchema,
};
