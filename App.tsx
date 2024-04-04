/**
 * Codia React Native App
 * https://codia.ai
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
      >
        <View
          style={{
            width: 1920,
            height: 1080,
            backgroundColor: '#0a0a0a',
            position: 'relative',
            overflow: 'hidden',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <View
            style={{
              width: 1920,
              height: 895,
              position: 'relative',
              zIndex: 14,
              marginTop: -1000,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            }}
          >
            <ImageBackground
              style={{
                width: 672,
                height: 895,
                position: 'absolute',
                top: 0,
                left: '50%',
                zIndex: 14,
                transform: [{ translateY: 0 }, { translateX: -336 }],
              }}
              source={require('./assets/images/ef58d3ab3cfe57370dcaa095d10e180bf936016d.png')}
              resizeMode='cover'
            />
            <View
              style={{
                width: 1920,
                height: 79,
                position: 'absolute',
                top: 812,
                left: 0,
                overflow: 'hidden',
                zIndex: 3,
              }}
            >
              <Text
                style={{
                  width: 166,
                  height: 44,
                  fontFamily: 'Bebas Neue',
                  fontSize: 46,
                  fontWeight: '400',
                  lineHeight: 44,
                  position: 'absolute',
                  top: '50%',
                  left: 93,
                  textAlign: 'left',
                  zIndex: 4,
                  transform: [{ translateY: -21.5 }, { translateX: 0 }],
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Bebas Neue',
                    fontSize: 46,
                    fontWeight: '400',
                    lineHeight: 55.2,
                    color: '#ffffff',
                    position: 'relative',
                    textAlign: 'left',
                  }}
                >
                  Marvel
                </Text>
                <Text
                  style={{
                    fontFamily: 'Bebas Neue',
                    fontSize: 46,
                    fontWeight: '400',
                    lineHeight: 55.2,
                    color: '#ff0000',
                    position: 'relative',
                    textAlign: 'left',
                  }}
                >
                  ous
                </Text>
              </Text>
              <View
                style={{
                  display: 'flex',
                  width: 617,
                  height: 30,
                  flexDirection: 'row',
                  gap: 47,
                  alignItems: 'flex-start',
                  flexWrap: 'nowrap',
                  position: 'absolute',
                  top: 25,
                  left: '50%',
                  zIndex: 5,
                  transform: [{ translateY: 0 }, { translateX: -308 }],
                }}
              >
                <Text
                  style={{
                    height: 30,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Clash Display',
                    fontSize: 24,
                    fontWeight: '600',
                    lineHeight: 29.52,
                    color: '#ffffff',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 6,
                  }}
                  numberOfLines={1}
                >
                  Top cast
                </Text>
                <Text
                  style={{
                    height: 30,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Clash Display',
                    fontSize: 24,
                    fontWeight: '600',
                    lineHeight: 29.52,
                    color: '#ffffff',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 7,
                  }}
                  numberOfLines={1}
                >
                  Production
                </Text>
                <Text
                  style={{
                    height: 30,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Clash Display',
                    fontSize: 24,
                    fontWeight: '600',
                    lineHeight: 29.52,
                    color: '#ffffff',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 8,
                  }}
                  numberOfLines={1}
                >
                  Box office
                </Text>
                <Text
                  style={{
                    height: 30,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Clash Display',
                    fontSize: 24,
                    fontWeight: '600',
                    lineHeight: 29.52,
                    color: '#ffffff',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 9,
                  }}
                  numberOfLines={1}
                >
                  Soap2day
                </Text>
              </View>
              <View
                style={{
                  width: 87.353,
                  height: 25,
                  position: 'absolute',
                  top: '50%',
                  left: 1732,
                  zIndex: 10,
                  transform: [{ translateY: -11.5 }, { translateX: 0 }],
                }}
              >
                <ImageBackground
                  style={{
                    width: '28.62%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 12,
                  }}
                  source={require('./assets/images/d3e87b7f-cf22-4e73-ac8b-6df87e7cb990.png')}
                />
                <ImageBackground
                  style={{
                    width: '37.04%',
                    height: '47.06%',
                    position: 'absolute',
                    top: '28%',
                    left: '62.96%',
                    zIndex: 11,
                  }}
                  source={require('./assets/images/e6cda507-9c8e-4fde-844f-58bdf937b670.png')}
                />
              </View>
            </View>
          </View>
          <Text
            style={{
              height: 39,
              fontFamily: 'Clash Display',
              fontSize: 32,
              fontWeight: '600',
              lineHeight: 39,
              color: '#ffffff',
              letterSpacing: 2.56,
              position: 'relative',
              textAlign: 'left',
              zIndex: 33,
              marginTop: 117,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 901,
            }}
            numberOfLines={1}
          >
            NWH
          </Text>
          <Text
            style={{
              height: 25,
              fontFamily: 'Clash Display',
              fontSize: 20,
              fontWeight: '700',
              lineHeight: 24.6,
              color: '#ffffff',
              letterSpacing: 1.6,
              position: 'relative',
              textAlign: 'left',
              zIndex: 17,
              marginTop: 3,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 107,
            }}
            numberOfLines={1}
          >
            Tags
          </Text>
          <View
            style={{
              display: 'flex',
              width: 202,
              height: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              zIndex: 23,
              marginTop: 10,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 115,
            }}
          >
            <Text
              style={{
                height: 20,
                flexShrink: 0,
                fontFamily: 'Clash Display',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 19.68,
                color: '#ffffff',
                letterSpacing: 1.28,
                position: 'relative',
                textAlign: 'left',
                zIndex: 19,
              }}
              numberOfLines={1}
            >
              Action
            </Text>
            <Text
              style={{
                height: 20,
                flexShrink: 0,
                fontFamily: 'Clash Display',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 19.68,
                color: '#ffffff',
                letterSpacing: 1.28,
                position: 'relative',
                textAlign: 'left',
                zIndex: 21,
              }}
              numberOfLines={1}
            >
              Twist
            </Text>
            <Text
              style={{
                height: 20,
                flexShrink: 0,
                fontFamily: 'Clash Display',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 19.68,
                color: '#ffffff',
                letterSpacing: 1.28,
                position: 'relative',
                textAlign: 'left',
                zIndex: 23,
              }}
              numberOfLines={1}
            >
              3D-R
            </Text>
          </View>
          <View
            style={{
              width: 2872,
              height: 49,
              position: 'relative',
              zIndex: 28,
              marginTop: 183,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: -468,
            }}
          >
            <Text
              style={{
                display: 'flex',
                height: 39,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Clash Display',
                fontSize: 32,
                fontWeight: '600',
                lineHeight: 39,
                color: '#ffffff',
                letterSpacing: 2.56,
                position: 'absolute',
                top: 0,
                left: 0,
                textAlign: 'left',
                zIndex: 25,
              }}
              numberOfLines={1}
            >
              Tom Holland
            </Text>
            <Text
              style={{
                display: 'flex',
                height: 39,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Clash Display',
                fontSize: 32,
                fontWeight: '600',
                lineHeight: 39,
                color: '#ffffff',
                letterSpacing: 2.56,
                position: 'absolute',
                top: 0,
                left: 261,
                textAlign: 'left',
                zIndex: 26,
              }}
              numberOfLines={1}
            >
              Toby Maguire
            </Text>
            <View
              style={{
                width: 534,
                height: 49,
                position: 'absolute',
                top: 0,
                left: 2338,
                zIndex: 28,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  height: 39,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Clash Display',
                  fontSize: 32,
                  fontWeight: '600',
                  lineHeight: 39,
                  color: '#ffffff',
                  letterSpacing: 2.56,
                  position: 'absolute',
                  top: 10,
                  left: 0,
                  textAlign: 'left',
                  zIndex: 27,
                }}
                numberOfLines={1}
              >
                Zendaya
              </Text>
              <Text
                style={{
                  display: 'flex',
                  height: 39,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Clash Display',
                  fontSize: 32,
                  fontWeight: '600',
                  lineHeight: 39,
                  color: '#ffffff',
                  letterSpacing: 2.56,
                  position: 'absolute',
                  top: 10,
                  left: 213,
                  textAlign: 'left',
                  zIndex: 28,
                }}
                numberOfLines={1}
              >
                Andrew Guarfield
              </Text>
            </View>
          </View>
          <ImageBackground
            style={{
              width: 164,
              height: 164,
              position: 'relative',
              zIndex: 34,
              marginTop: 77,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 878,
            }}
            source={require('./assets/images/abc13c49-83e1-4840-9819-bf9c10ce1b6d.png')}
            resizeMode='cover'
          />
          <View
            style={{
              width: 1751,
              height: 492,
              position: 'relative',
              zIndex: 32,
              marginTop: 236,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 89,
            }}
          >
            <ImageBackground
              style={{
                width: '6.74%',
                height: '23.98%',
                position: 'absolute',
                top: 0,
                left: '89.78%',
                zIndex: 32,
              }}
              source={require('./assets/images/f4b78b00-8735-4ea5-bc4c-f03df213de5c.png')}
            />
            <Text
              style={{
                display: 'flex',
                height: 445,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Bebas Neue',
                fontSize: 371,
                fontWeight: '400',
                lineHeight: 445,
                color: '#ffffff',
                letterSpacing: 29.68,
                position: 'absolute',
                top: 47,
                left: 0,
                textAlign: 'left',
                zIndex: 13,
              }}
              numberOfLines={1}
            >
              Spider -man
            </Text>
            <Text
              style={{
                display: 'flex',
                height: 445,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Bebas Neue',
                fontSize: 371,
                fontWeight: '400',
                lineHeight: 445,
                color: 'transparent',
                letterSpacing: 29.68,
                position: 'absolute',
                top: 47,
                left: 0,
                textAlign: 'left',
                zIndex: 15,
              }}
              numberOfLines={1}
            >
              Spider -man
            </Text>
            <Text
              style={{
                display: 'flex',
                height: 39,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Clash Display',
                fontSize: 32,
                fontWeight: '600',
                lineHeight: 39,
                color: '#ffffff',
                letterSpacing: 2.56,
                position: 'absolute',
                top: 255,
                left: 26,
                textAlign: 'left',
                zIndex: 30,
              }}
              numberOfLines={1}
            >
              Spider-Man NWH
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 509,
                height: 150,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Clash Display',
                fontSize: 20,
                fontWeight: '400',
                lineHeight: 24.6,
                color: '#ffffff',
                letterSpacing: 1.6,
                position: 'absolute',
                top: 310,
                left: 26,
                textAlign: 'left',
                zIndex: 31,
              }}
            >
              (at around 13 mins) When Peter goes back to his high school and
              walks up the stairs, there is a mural behind him. Part of the
              mural contains a chemical structure, however, one of the carbons
              has five bonds. This is impossible as carbons cannot exceed four
              bonds.
            </Text>
            <Text
              style={{
                display: 'flex',
                height: 44,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Clash Display',
                fontSize: 36,
                fontWeight: '700',
                lineHeight: 44,
                color: '#ffffff',
                letterSpacing: 2.88,
                position: 'absolute',
                top: 316,
                left: 1401,
                textAlign: 'left',
                zIndex: 2,
              }}
              numberOfLines={1}
            >
              Book now
            </Text>
          </View>
          <ImageBackground
            style={{
              width: 3758.046,
              height: 2150.795,
              position: 'absolute',
              top: -572,
              left: -911,
            }}
            source={require('./assets/images/14067fa4-86c6-43ab-8f65-8f281be11b16.png')}
            resizeMode='cover'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
