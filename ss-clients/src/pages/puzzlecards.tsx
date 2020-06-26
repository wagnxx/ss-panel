import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect, puzzlecardsModelState, Dispatch, Loading } from 'umi';

interface PageProps {
  puzzlecards: puzzlecardsModelState;
  loading: boolean;
  dispatch: Dispatch;
}

const namespace = 'puzzlecards';

const mapStateToProps = ({
  puzzlecards,
  loading,
}: {
  puzzlecards: puzzlecardsModelState;
  loading: Loading;
}) => {
  //   const cardList = state[namespace];
  return {
    puzzlecards,
    loading: loading.models.puzzlecards,
  };
};

const PuzzleCardsPage: React.FC<PageProps> = props => {
  //   let cardList = puzzlecards.data;
  let cardList = props.puzzlecards.data;
  const getData = () => {
    props.dispatch({
      type: `${namespace}/queryInitCards`,
    });
  };
  return (
    <div>
      {cardList ? (
        cardList.map(card => {
          return (
            <Card key={card.id}>
              <div>Q: {card.setup}</div>
              <div>
                <strong>A: {card.punchline}</strong>
              </div>
            </Card>
          );
        })
      ) : (
        <p>加载中........</p>
      )}
      <Button onClick={getData}>get data</Button>
    </div>
  );
};
export default connect(mapStateToProps)(PuzzleCardsPage);
// @connect(mapStateToProps)
// export default class PuzzleCardsPage extends Component {
//   render() {
//     return (
//       <div>
//         {
//           this.props.cardList.map(card => {
//             return (
//               <Card key={card.id}>
//                 <div>Q: {card.setup}</div>
//                 <div>
//                   <strong>A: {card.punchline}</strong>
//                 </div>
//               </Card>
//             );
//           })
//         }
//         {/* <div>
//           <Button onClick={this.addNewCard}> 添加卡片 </Button>
//         </div> */}
//       </div>
//     );
//   }
// }
