import TodoList from "./components/TodoList/TodoList";
import './App.scss';
import { Layout, Space } from 'antd';
const { Header, Footer, Content } = Layout;

const App = () => (
  <Space
    direction="vertical"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Header className="header">TodoList</Header>
      <Content className="content">
        <div className="todo">
          <TodoList />
        </div>
      </Content>
      <Footer className="footer">by Anzoro</Footer>
    </Layout>
  </Space>
);
export default App;

// api json-graphql-serverа настроен для работы с постами, но так как я могу осуществить все crud операции, я сделал тудушку,поэтому не удивляйтесь именам запросов вроде GET_POSTS || allPosts, это нужно для взаимодействия с сервером