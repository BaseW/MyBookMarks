import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TweetList } from './TweetList.component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: TweetList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TweetList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TweetList> = (args) => <TweetList {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  tweets: [
    {
      id: "tweet-1",
      author: "author-1",
      content: "content-1",
    },
    {
      id: "tweet-2",
      author: "author-2",
      content: "content-2",
    }
  ]
};
