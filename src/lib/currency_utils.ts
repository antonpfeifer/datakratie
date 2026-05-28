

class CurrencyUtils {
    formatBudgetValue(value: number): string {
            const realValue = value*1000; // Assuming the value is in thousands, adjust as needed
            if (realValue >= 1_000_000_000) {
                const inBillions = realValue / 1_000_000_000;
                const formatted = new Intl.NumberFormat("de-DE", {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                }).format(inBillions);
                return `${formatted} Mrd. €`;
            } else if (realValue >= 1_000_000) {
                const inMillions = realValue / 1_000_000;
                const formatted = new Intl.NumberFormat("de-DE", {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                }).format(inMillions);
                return `${formatted} Mio. €`;
            }
            return `${new Intl.NumberFormat("de-DE").format(value)} €`;
    }
}

export default new CurrencyUtils();