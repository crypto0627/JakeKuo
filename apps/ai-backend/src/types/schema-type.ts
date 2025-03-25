export type MetricType = "PRICE" | "VOLUME" | "MAX_TRANSACTION";
export type TimeInterval = "HOURLY" | "DAILY" | "WEEKLY";

export interface EthereumDataPoint {
  timestamp: string;
  value: number;
}

export interface EthereumQueryArgs {
  metric: MetricType;
  interval: TimeInterval;
  startTime: string;
  endTime: string;
}

export interface EthereumQueryResponse {
  ethereumData: EthereumDataPoint[];
}
