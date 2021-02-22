import {
  getCLS,
  getFID,
  getFCP,
  getLCP,
  getTTFB,
  ReportHandler,
} from 'web-vitals'

const webVitals = (reportHandler: ReportHandler): void => {
  getCLS(reportHandler)
  getFID(reportHandler)
  getFCP(reportHandler)
  getLCP(reportHandler)
  getTTFB(reportHandler)
}

export default webVitals
