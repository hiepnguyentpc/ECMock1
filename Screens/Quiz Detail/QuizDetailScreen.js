import React from 'react'
import { View, StyleSheet,Text } from 'react-native'
import { Tabs } from 'react-native-collapsible-tab-view'
import DetailView from './Detail View/DetailView'

import HeaderQuizDetail from './Header/Header'
const HEADER_HEIGHT = 250

const QuizDetailScreen = () => {
  

  return (
    <Tabs.Container
      renderHeader={HeaderQuizDetail}
      headerHeight={HEADER_HEIGHT} // optional
    >
     
      <Tabs.Tab name="CS Foundation">
        <Tabs.ScrollView>
          <DetailView/>
        </Tabs.ScrollView>
      </Tabs.Tab>


    </Tabs.Container>
  )
}
export default QuizDetailScreen
