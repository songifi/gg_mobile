import * as React from 'react';
import Svg, { SvgProps } from 'react-native-svg';
import GoogleSvg from '@/assets/images/google.svg';

export default function GoogleIcon(props: SvgProps) {
    return <GoogleSvg width={22} height={22} {...props} />;
}
