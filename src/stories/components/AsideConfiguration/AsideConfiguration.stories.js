import AsideConfiguration from './AsideConfiguration.tsx';

export default {
    component: AsideConfiguration,
    title: 'AsideConfiguration',
    argTypes: {
        clickTab: { action: 'Enter the void!' },
        clickToogleBar: { action: 'Enter the void!' }
    },
};

const Template = args => <AsideConfiguration {...args} />;

export const Default = Template.bind({});
Default.args = { title: 'Configuration',
buttonOneTitle: 'One',
buttonTwoTitle: 'Two',
buttonThreeTitle: 'Three',
tabOne: "Lex Fridman",
tabTwo: "Rick Rubin",
tabThree: "Bizarre"
};