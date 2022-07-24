import React from 'react'
// import { Input, Row, Col, Space } from 'antd'

interface SearchBarProps {
  searched: (term: string) => void
  // placeholder?: string
  // primaryButton?: React.ReactNode
  // secondaryButton?: React.
}

const SearchBar: React.FC<SearchBarProps> = () => (
  <div></div>
  // <Row justify='space-between'>
  //   <Col md={8} xs={12}>
  //     <Input.Search placeholder={placeholder} size='large' onSearch={searched} />
  //   </Col>
  //   <Col md={8} xs={12} style={{ textAlign: 'right' }}>
  //     <Space>
  //       {secondaryButton}
  //       {primaryButton}
  //     </Space>
  //   </Col>
  // </Row>
)

export default SearchBar
