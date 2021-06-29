---
sidebar_position: 0
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
# Welcome


## Color guide of this document.


export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '3px',
      color: '#000',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);


:::tip 

A tip or an idea.

:::

:::danger Take care

This action is dangerous

:::


:::note

Some more information.
:::

:::caution
Attention, there may be some change
:::

:::important
Important, blue color

:::


<Highlight color="#cf1d1d">YouTube</Highlight>

## For linux is recommended 

```shell
sudo apt update
```

## Install Photon 

<Tabs
  groupId="operating-systems"
  defaultValue="win"
  values={[
    {label: 'Windows', value: 'win'},
    {label: 'macOS', value: 'mac'},
    {label: 'Linux', value: 'linux'},
  ]}>
  <TabItem value="win">I am Windows.</TabItem>
  <TabItem value="mac">I am macOS.</TabItem>
  <TabItem value="linux"> <h2> Is recommended </h2> 
  <code>sudo apt update && sudo apt upgrade </code></TabItem>
</Tabs>


## Clone the GitHub repository with the following command:

```shell
git clone https://github.com/HashLDash/Photon.git
```

```shell
cd Photo/

sh install.sh
```

Now just wait to install **automatically**.











