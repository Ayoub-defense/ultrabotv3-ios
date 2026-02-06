import Network

class NetworkAgent {
  static func snapshot() {
    let m = NWPathMonitor()
    m.pathUpdateHandler = { _ in m.cancel() }
    m.start(queue: .global())
  }
}
