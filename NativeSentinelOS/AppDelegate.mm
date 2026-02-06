#import "AppDelegate.h"
#import "NativeSentinelOS-Swift.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application
didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [SentinelDaemon boot];
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

@end
