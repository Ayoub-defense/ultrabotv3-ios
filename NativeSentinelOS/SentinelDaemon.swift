import Foundation

@objc(SentinelDaemon)
class SentinelDaemon: NSObject {

  @objc static func requiresMainQueueSetup() -> Bool { true }

  @objc static func boot() {
    MotionAgent.start()
    NetworkAgent.snapshot()
    DeepIntelAgent.scan()
  }

  @objc func boot() {
    SentinelDaemon.boot()
  }
}
