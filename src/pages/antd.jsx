import { Button } from "antd";
import {Typography} from "antd";
import { Input } from "antd";
import { SearchOutlined,UserOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import {Form} from "antd";

const { Header,Footer,Content,Sider } = Layout

const {Title,Text,Paragraph} = Typography


function Antd() {
  return (
    <div style={{ display: "flex", gap: "10px", padding: 20 }}>
      <Button type="primary" className="bg-red-700">Primary</Button>     {/* Main action */}
      <Button>Default</Button>                    {/* Normal button */}
      <Button type="dashed">Dashed</Button>       {/* Low priority */}
      <Button type="text">Text</Button>           {/* Minimal */}
      <Button href="/" type="link">Link</Button>  {/* Looks like anchor */}
      <Button danger>Danger</Button>   
        <Button icon={<UserOutlined />}>Profile</Button>
         <Button type="primary" icon={<SearchOutlined />}></Button>
      <Title level={1}>Madhan work is start</Title> 
      <Paragraph>
        This is a paragraph. It is used for regular content text.
      </Paragraph> 
      <Title level={2}>Madhan blas is mood</Title>         {/* Delete */}
      <Title level={3}>Mahdn ypu can daa</Title>
      <Text type="strong">No body is there for you</Text>
      <Text type="primary">hi paa</Text>
      <Text type="danger">Hi Maa</Text>
      <Text type="warning">Hii daa</Text>
      <Input prefix={< SearchOutlined/>} placeholder="madhan"></Input>

      <div>
        <Layout>
            <Header>Top section of weside</Header>
            <Layout>
                <Sider>menu</Sider>
                <Content>Main content goes there</Content>
            </Layout>
            <Footer>All reserved word @</Footer>
        </Layout>
      </div>
      <div>
        <Form className="flex justify-center items-center">
            <Form.Item name="name" label="Madhan" rules={[{required:true,message:"fill the name Field"}]}>
            <Input/>
            </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Antd;
