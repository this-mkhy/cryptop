import React from 'react'
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';
import Loader from './Loader'
import { useGetExchangesQuery } from '../services/cryptoApi.js';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  //const exchangesList = data?.data?.exchanges;
  const coinList = data?.data?.coins
  
  if (isFetching) 
    return <Loader />;

  console.log(data)

  return (
    <>
      {/* <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {
          coinList.map((coin) => (
            <Col span={24}>
              <Collapse>
                <Panel
                  key={coin.uuid}
                  showArrow={false}
                  header={(
                    <Row key={coin.uuid}>
                      <Col span={6}>
                        <Text><strong>{coin.rank}.</strong></Text>
                        <Avatar className="exchange-image" src={coin.iconUrl} />
                        <Text><strong>{coin.name}</strong></Text>
                      </Col>
                      <Col span={6}>'$'{millify(coin.volume)}</Col>
                      <Col span={6}>{millify(coin.numberOfMarkets)}</Col>
                      <Col span={6}>{millify(coin.marketShare)}%</Col>
                    </Row>
                  )}>
                  {HTMLReactParser(coin.description || '')}
                </Panel>
              </Collapse>
            </Col>
          ))} 
      </Row> */}
    </>
  )
}

export default Exchanges