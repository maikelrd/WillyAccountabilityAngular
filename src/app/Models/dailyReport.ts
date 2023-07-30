export interface IDailyReport{
    dailyReportId: number;
    date: string;
    dieselPrice: number;
    litersByTrip: number;
    numberOfTrips: number;
    totalMoney: number;
    workedLeader: boolean;

    fuelSpent: number;
    expensesInFuel: number;
    paymentConductress: number;
    paymentDriver: number;
    paymentLeader: number;
    totalPayment: number;
    moneyPlusFuel: number;
    freeMoney: number;
}