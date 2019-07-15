#import <UIKit/UIKit.h>
#import <React/RCTUIManager.h>
#import "RNMapboxNavigation-Swift.h"

@interface MapboxViewManager : RCTViewManager
@end

@implementation MapboxViewManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  return [MapboxView new];
}

RCT_EXPORT_VIEW_PROPERTY(origin, NSDictionary *)

@end
