import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { englishData } from './component/EnglishQuestion';
import QuestionItem from './component/QuestionItem';
import { useState } from 'react';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [question, setQuestion] = useState(englishData);

  const OnSelectOption = (index, x) => {
    const updatedData = question.map((item, ind) => {
      if (index === ind) {
        return { ...item, marked: x };
      }
      return item;
    });
    setQuestion(updatedData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headline}>
        <Text style={styles.headlineText}>
          G&K Questions:
          <Text style={{ color: '#ffb703' }}>
            <Text style={{ color: '#2a9d8f' }}> {currentIndex}</Text>
            <Text style={{ color: '#fff' }}> / </Text>{englishData.length}
          </Text>
        </Text>
      </View>
      <FlatList
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        data={question}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <QuestionItem
            data={item}
            selectedOption={(x) => {
              OnSelectOption(index, x);
            }}
          />
        )}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#091124',
  },
  headline: {
    marginTop: 40,
    borderTopWidth: 1,
    borderTopColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  headlineText: {
    fontSize: 30,
    marginLeft: 40,
    color: '#bde0fe',
    fontWeight: '800',
    margin: 10,
  },
});



// import { StatusBar } from 'expo-status-bar';
// import { FlatList, StyleSheet, Text, View } from 'react-native';
// import { englishData } from './component/EnglishQuestion';
// import QuestionItem from './component/QuestionItem';
// import { useState } from 'react';

// export default function App() {
//   const [currentIndex , setCurrentIndex] =useState(1)
//   const [question , setQuestion] = useState(englishData)
//   const OnSelectOption=(index ,x)=>{
//     const tempData = question;
//     tempData.map((item , ind)=>{
//       if(index==ind){
//         item.marked = x;
//       }
//     });
//     let temp=[];
//     temp.map(item =>{
//       temp.push(item)
//     })
//     setQuestion(temp)
//   }
//   return (
//     <View style={styles.container}>
//       <View style={styles.headline}>
//         <Text style={{ fontSize: 30, marginLeft: 40,color:'#bde0fe', fontWeight:800,
//           margin:10
//          }} >G&K Questions:
//           <Text style={{color:'#ffb703'}}>
            
//              <Text style={{color:'#2a9d8f'}}> {currentIndex}</Text><Text style={{color:'#fff'}}>/</Text>{englishData.length}

            
//           </Text>
//         </Text>
//       </View>
//       <View>
//         <FlatList
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         horizontal
//         data={question}
//         renderItem={({item, index}) => {
//           return <QuestionItem data={item} selectedOption={ x =>{
//             OnSelectOption(index,x);
//           }}/>
//         }}
        
        
//         />
//       </View>
//       <StatusBar style="light" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#091124',
//   },
//   headline: {
//     marginTop: 40,


//     borderTopWidth: 1,
//     borderTopColor: '#fff',
//     borderBottomWidth:1,
//     borderBottomColor:'#fff',



//   }
// });

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { englishData } from './component/EnglishQuestion';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.headline}>
//         <Text style={{ fontSize: 30, marginLeft: 40 }}>
//           G&K Questions:
//           <Text style={{ color: '#ffb703' }}>
//             <Text style={{ color: '#2a9d8f' }}> 1 </Text>
//             / {englishData.length}
//           </Text>
//         </Text>
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   headline: {
//     marginTop: 40,
//     borderTopWidth: 1,
//     borderTopColor: '#000',
//   },
// });

