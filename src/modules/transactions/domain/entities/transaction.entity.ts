import { BaseEntity } from '@/core/domain/base-entity';
import { TransactionStatus } from '@/modules/transactions/domain/enums/status.enum';
import { TransactionType } from '@/modules/transactions/domain/enums/type.enum';
import { Merchant } from '@/modules/transactions/domain/interfaces/merchant.interface';
import { Transaction } from '@/modules/transactions/domain/interfaces/transaction.interface';
import { Status } from '@/modules/transactions/domain/value-objects/status.value-object';
import { Type } from '@/modules/transactions/domain/value-objects/type.value-object';

export class TransactionEntity extends BaseEntity<Transaction> {
  private _account: string[];
  private _accounting_date: Date;
  private _amount: number;
  private _balance: number;
  private _category: string;
  private _collected_at: Date;
  private _currency: string;
  private _description: string;
  private _id: string;
  private _internal_identification: string;
  private _merchant: Merchant;
  private _observations?: string;
  private _reference: string;
  private _status: Status;
  private _subcategory?: string;
  private _type: Type;
  private _value_date: Date;

  constructor(props: Transaction) {
    super(props);
    this._account = props.account;
    this._accounting_date = props.accounting_date;
    this._amount = props.amount;
    this._balance = props.balance;
    this._category = props.category;
    this._collected_at = props.collected_at;
    this._currency = props.currency;
    this._description = props.description;
    this._id = props.id;
    this._internal_identification = props.internal_identification;
    this._merchant = props.merchant;
    this._observations = props.observations;
    this._reference = props.reference;
    this._status = new Status(props.status as TransactionStatus);
    this._subcategory = props.subcategory;
    this._type = new Type(props.type as TransactionType);
    this._value_date = props.value_date;
  }

  public static create(props: Transaction): TransactionEntity {
    return new TransactionEntity(props);
  }

  public getAccount(): string[] {
    return this._account;
  }

  public getAccountingDate(): Date {
    return this._accounting_date;
  }

  public getAmount(): number {
    return this._amount;
  }

  public getBalance(): number {
    return this._balance;
  }

  public getCategory(): string {
    return this._category;
  }

  public getCollectedAt(): Date {
    return this._collected_at;
  }

  public getCurrency(): string {
    return this._currency;
  }

  public getDescription(): string {
    return this._description;
  }

  public getId(): string {
    return this._id;
  }

  public getInternalIdentification(): string {
    return this._internal_identification;
  }

  public getMerchant(): Merchant {
    return this._merchant;
  }

  public getObservations(): string {
    return this._observations;
  }

  public getReference(): string {
    return this._reference;
  }

  public getStatus(): Status {
    return this._status;
  }

  public getSubcategory(): string {
    return this._subcategory;
  }

  public getType(): Type {
    return this._type;
  }

  public getValueDate(): Date {
    return this._value_date;
  }

  public toJson(): Transaction {
    return {
      uuid: this._uuid,
      account: this._account,
      accounting_date: this._accounting_date,
      amount: this._amount,
      balance: this._balance,
      category: this._category,
      collected_at: this._collected_at,
      currency: this._currency,
      description: this._description,
      id: this._id,
      internal_identification: this._internal_identification,
      merchant: this._merchant,
      observations: this._observations,
      reference: this._reference,
      status: this._status.getValue(),
      subcategory: this._subcategory,
      type: this._type.getValue(),
      value_date: this._value_date,
    };
  }
}
