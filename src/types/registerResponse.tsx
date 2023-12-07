export interface ReqApiGetTaskCutting {
  pooNo: string;
  job: string;
  jobProductionNo: string;
  customerName: string;
  customerPo: string;
  note: string;
  styleNo: string;
  subjobNo: string;
  gacdate: Date;
  pooDetail: ReqPooDetail[];
}

export interface ReqPooDetail {
  id: number;
  jobProductionNo: string;
  parentBundleBarcode: string;
  bundleBarCode: string;
  bundleNo: number;
  colorway: string;
  poLineItem: number;
  size: string;
  boundleQuantity: number;
  marker: string;
  route: string;
  supplier: string;
}
