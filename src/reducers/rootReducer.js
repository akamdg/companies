const initState = {
    posts: [
      {id: '1', title: 'Kongō Gumi', year: 'Year established: 578', field: 'Construction', location: 'Located in Japan', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
      {id: '2', title: 'Nishiyama Onsen Keiunkan', year: 'Year established: 705', field: 'Hotel', location: 'Located in Japan', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
      {id: '3', title: 'Koman', year: 'Year established: 717', field: 'Hotel', location: 'Located in Japan', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
      {id: '4', title: 'Hōshi Ryokan', year: 'Year established: 718', field: 'Hotel', location: 'Located in Japan', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
      {id: '5', title: 'Genda Shigyō', year: 'Year established: 771', field: 'Ceremonial paper goods', location: 'Located in Japan', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
      {id: '6', title: 'St. Peter Stiftskulinarium', year: 'Year established: 803', field: 'Restaurant', location: 'Located in Austria', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}

    ]
  }
  
  
  
  const rootReducer = (state = initState, action) => {
    console.log(action);
    if(action.type === 'DELETE_POST'){
     let newPosts = state.posts.filter(post => {
       return post.id !== action.id
     });
     return {
       ...state,
       posts: newPosts
     }
    }
    return state;
  }
  
  export default rootReducer