import React from 'react';
import * as Slider from '@radix-ui/react-slider';

import { CSS, styled } from '../stitches.config';
import { SliderOwnProps, SliderPrimitive } from '@radix-ui/react-slider';

const defaultStyles = {
    boxSizing: 'border-box',
} as CSS;

export const SliderRoot = styled(Slider.Root, {
    ...defaultStyles,
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    userSelect: 'none',
    touchAction: 'none',
    width: '100%',
    height: '1em',
});

export const SliderTrack = styled(Slider.Track, {
    ...defaultStyles,
    background: '#ffffff40',
    position: 'relative',
    flexGrow: 1,
    height: 3,
    borderRadius: '3px',
});


export const SliderRange = styled(Slider.Range, {
    ...defaultStyles,
    position: 'absolute',
    background: 'var(--tm-primary-500)',
    borderRadius: '3px',
    height: '100%',
});

export const SliderThumb = styled(Slider.Thumb, {
    ...defaultStyles,
    display: 'flex',
    width: 18,
    height: 18,
    background: 'var(--tm-primary-500)',
    borderRadius: '50%',
    cursor: 'pointer',
    outline: '1px solid #00000080',
    '&:hover': { backgroundColor: 'var(--tm-primary-500)' },
    '&:focus': { boxShadow: '0 0 0 5px #0000001c' },
});

export const Slider2: SliderPrimitive = React.forwardRef<HTMLSpanElement, SliderOwnProps>((props, forwardedRef) => {
    const value = props.value || props.defaultValue || []; // https://www.radix-ui.com/docs/primitives/components/slider
    return (
        <SliderRoot {...props} ref={forwardedRef}>
            <SliderTrack>
                <SliderRange />
            </SliderTrack>
            {value.map((_, i) => <SliderThumb key={i} />)}
        </SliderRoot>
    );
});
