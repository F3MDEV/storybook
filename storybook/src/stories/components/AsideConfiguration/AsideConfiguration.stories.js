import AsideConfiguration from './AsideConfiguration.tsx';

export default {
    component: AsideConfiguration,
    title: 'AsideConfiguration',
    argTypes: {
        clickTab: {
            table: {
                disable: true,
              },
        },
        clickToogleBar: {
            table: {
                disable: true,
              },
        }, 
        tabs: {
            table: {
                disable: true,
              },
        }, 
        openBarContent: {
            table: {
                disable: true,
              },
        }, 
        closedBarContent: {
            table: {
                disable: true,
              },
        }, 
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