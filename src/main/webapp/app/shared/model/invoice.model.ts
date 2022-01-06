import dayjs from 'dayjs';
import { IShipment } from 'app/shared/model/shipment.model';
import { IProductOrder } from 'app/shared/model/product-order.model';
import { InvoiceStatus } from 'app/shared/model/enumerations/invoice-status.model';
import { PaymentMethod } from 'app/shared/model/enumerations/payment-method.model';

export interface IInvoice {
  id?: number;
  date?: string;
  details?: string | null;
  status?: InvoiceStatus;
  paymentMethod?: PaymentMethod;
  paymentDate?: string;
  paymentAmount?: number;
  shipments?: IShipment[] | null;
  order?: IProductOrder | null;
}

export const defaultValue: Readonly<IInvoice> = {};
