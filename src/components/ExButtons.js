import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const ExButtons = ({styles, title, onPress, hitSlop}) => {
    <Pressable
        style={{
          width: 150, // 크기부분 나중에 수정하기
          height: 150,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius:10,
          backgroundColor:"#AFB6B9",
        }}
        onPress={() => console.log("산책 선택됨")}
    />   
};