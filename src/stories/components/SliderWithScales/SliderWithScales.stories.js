import SliderWithScales from './SliderWithScales.tsx';

export default {
    component: SliderWithScales,
    title: 'SliderWithScales',
    argTypes: {
        sliderMainColor: { control: 'color' },
        arrowTooltipColor: { control: 'color' },
        tooltipColor: { control: 'color' }
    },
};

const Template = args => <SliderWithScales {...args} />;

const marks = [
    {
        value: 0,
        label: "0%"
    },
    {
        value: 20,
        label: "20%"
    },
    {
        value: 40,
        label: "40%"
    },
    {
        value: 60,
        label: "60%"
    },
    {
        value: 80,
        label: "80%"
    },
    {
        value: 100,
        label: "100%"
    }
];

export const Default = Template.bind({});
Default.args = {
    numberOfStepsPerMove: 10,
    marksLabels: marks,
    thumbHTMLElement: 'span',
    displayValueBallon: "on",
    labelFormat: "Slider Value",
    barProps: "",
    sliderValue: "Slider Value",
    className: "top-60 h-slider-scales",
    name: "MpDS SliderWithScales",
    widthOfTheSlide: 250,
    sliderMainColor: "rgb(24, 120, 126)",
    arrowTooltipColor: "#4CB3BA",
    tooltipColor: "#4CB3BA",
    ariaLabel: "F3M Slider",
    ariaValueText: "0%",
    step: 40,
    valueSlider: "0"
};
