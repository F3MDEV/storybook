import Timeline from './Timeline.tsx';
import timelineData from '../Timeline/assets/data';
export default {
    component: Timeline,
    title: 'Timeline'
};
const Template = args => <Timeline {...args} />;
export const Default = Template.bind({});
Default.args = {
    data: timelineData
};