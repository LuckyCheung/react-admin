import React from "react";
import "./Home.scss";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Typography } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
      breadcrumb: [],
    };
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  onClick = (e) => {
    let breadcrumb = e.key.split("/");
    breadcrumb = breadcrumb.filter((item) => {
      return item;
    });
    this.setState({
      breadcrumb,
    });
  };

  render() {
    const { children, navs } = this.props.route;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["/Home/User"]}
            mode="inline"
            onClick={this.onClick}
          >
            {navs.map((item) => {
              return (
                <SubMenu key={item.group} icon={item.icon} title={item.title}>
                  {item.children.map((i) => {
                    return (
                      <Menu.Item key={i.path} icon={i.meta.icon}>
                        <Link to={i.path}>{i.name}</Link>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              );
            })}
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ padding: 0, textAlign: "center" }}
          >
            <Title>后台管理</Title>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {this.state.breadcrumb.map((item) => {
                return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>;
              })}
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 500 }}
            >
              {renderRoutes(children)}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
