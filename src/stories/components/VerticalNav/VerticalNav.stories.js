import React from 'react';

import VerticalNav from './VerticalNav.tsx';
import {itemDashboard, itemSettings, itemWounds} from './VerticalNav.tsx';
export default {
    component: VerticalNav,
    title: 'VerticalNav',
    argTypes: {
        barExtended: {
            table: {
                disable: true,
              },
        }, 
    },
};

const Template = args => <VerticalNav {...args} />;

export const Default = Template.bind({});
Default.args = {
    selectedNavTabBackground: '#3f51b534',
    selectedNavTabBorderColor: '#3f51b5',
    sectionsItems: [itemDashboard, itemSettings, itemWounds],
    isPositionFixed: false
};
