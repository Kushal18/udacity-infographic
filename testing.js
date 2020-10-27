class Report {
    constructor(status, warp, type, status_report) {
        this.status = status;
        this.warp = warp;
        this.type = type;
        this.status_report = status_report;
    }

    getStatusReport(status, warp) {
        if (status === 'active' && warp <= 4) {
            this.status_report += 'the engines are active and we could be going faster.'
        } else if (status === 'active' && warp > 4) {
            this.status_report += 'the engines are active and we are going ' + warp + '.'
        } else if (status === 'down') {
            this.status_report += 'the engines are down.'
        } else {
            this.status_report += 'the comms are down and we can`t reach engineering.'
        }

        return this.status_report;
    }
}

const report = new Report('active',2,'Dilithium Crystal','Captain');
console.log(report.getStatusReport())