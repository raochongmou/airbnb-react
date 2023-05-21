import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import SectionHeader from "@/components/section-header";
import SectionContent from "@/components/section-content";
import Tabs from "@/base-ui/tabs";
import { DashboardTabsWrapper } from './style'
import SectionFooter from '@/components/section-footer';

const DashboardTabs = memo((props) => {
  const { dataInfo } = props;
  const count = 0;//作为页面刷新默认选项
  const tabsName = dataInfo.dest_address.map(item => item.name);
  const initialName = dataInfo.dest_address[count].name;
  const [name, setName] = useState(initialName);
  const handleItemClickInvoke = useCallback((index, item) => {
    setName(item)
  }, [name]);
  return (
    <DashboardTabsWrapper>
      <div className="tabs">
        <Tabs count={count} tabsName={tabsName} handleItemClickInvoke={handleItemClickInvoke}/>
      </div>
      <div className="discount">
        <SectionHeader title={dataInfo?.title} subTitle={dataInfo?.subtitle}/>
        <SectionContent roomWidth="33.33%" roomList={dataInfo?.dest_list?.[name]} />
        <SectionFooter name={name}/>
      </div>
    </DashboardTabsWrapper>
  )
})

DashboardTabs.propTypes = {
  dataInfo: PropTypes.object
}

export default DashboardTabs