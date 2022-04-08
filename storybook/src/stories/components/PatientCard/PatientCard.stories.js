import React from 'react';

import PatientCard from './PatientCard.tsx';

export default {
    component: PatientCard,
    title: 'PatientCard',
    argTypes: {
        colorBottomLink: { control: 'color' },
        colorText: { control: 'color' },
        clickedLink: { action: 'You can see something happen here if you want to!' },
        selectPatient: { action: 'Enter the void!' }
    },
};

const Template = args => <PatientCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    hasImage: false,
    idCardName: 'RUI MANUEL TEIXEIRA LOPES DO CARMO',
    idCardTypeDoc: 'SNS',
    idCardIdentification: '1234567890',
    RoomCodeTopic: 'R',
    RoomCode: '90',
    BedCodeTopic: 'B',
    BedCode: '9',
    valueOneTitle: 'Age',
    valueTwoTitle: 'Gender',
    valueThreeTitle: 'Occupation',
    valueFourTitle: 'Nationality',
    valueFiveTitle: 'Hospitalisation',
    valueOne: '51 (23.03.1969)',
    valueTwo: 'Male',
    valueThree: 'Teacher',
    valueFour: 'PT',
    valueFive: '1009 days (18.01.2018)',
    colorBottomLink: '#4cb3ba',
    textOfBottomLink: 'See All',
    colorText: '#494949',
    idCardPhoto: "https://akns-images.eonline.com/eol_images/Entire_Site/2022230/rs_1200x1200-220330122917-1200-will-smith-2022-oscars-GettyImages-1239561192.jpg?fit=around%7C660:372&output-quality=90&crop=660:372;center,top"
};
