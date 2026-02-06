import CoreMotion
import AVFoundation

class MotionAgent {
  static let manager = CMMotionManager()
  static var player: AVAudioPlayer?

  static func start() {
    guard manager.isAccelerometerAvailable else { return }
    manager.accelerometerUpdateInterval = 0.4
    manager.startAccelerometerUpdates(to: .main) { data, _ in
      guard let a = data?.acceleration else { return }
      let m = sqrt(a.x*a.x + a.y*a.y + a.z*a.z)
      if m > 2.6 { alarm() }
    }
  }

  static func alarm() {
    guard let url = Bundle.main.url(forResource: "alarm", withExtension: "mp3") else { return }
    player = try? AVAudioPlayer(contentsOf: url)
    player?.play()
  }
}
