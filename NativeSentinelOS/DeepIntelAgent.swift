import UIKit

class DeepIntelAgent {
  static func scan() {
    UIDevice.current.isBatteryMonitoringEnabled = true
    _ = UIDevice.current.batteryLevel
  }
}
