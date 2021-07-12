import Profile from "./components/Profile/Profile";
import Statistic from "./components/Statistic/Statistic";
import FriendsList from "./components/FriendsList/FriendsList";
import TransactionsHystory from "./components/Transactions/TransactionsHystory";

import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        url={user.url}
        location={user.location}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statisticalData} />
      {/* <Statistic stats={friends} /> */}
      <FriendsList friends={friends} />
      <TransactionsHystory items={transactions} />;
    </div>
  );
}

export default App;
