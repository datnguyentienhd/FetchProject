import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles';
import * as Progress from 'react-native-progress';
import { FlatList } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
function DetailScreen() {
  const navigation: any = useNavigation();
  const dataSlide = [
    {
      title: 'Petrol',
      listData: [
        {
          img: require('../../../assets/images/petrol-1.png'),
          amount: 15,
          infor: '50% discount for every $100 top-up on your Shell Petrol Card'
        },
        {
          img: require('../../../assets/images/petrol-2.png'),
          amount: 1000,
          infor: '70% discount top-up on your Shell Petrol Card'
        }
      ]
    },
    {
      title: 'Rental Rebate',
      listData: [
        {
          img: require('../../../assets/images/rental-1.png'),
          amount: 20,
          infor: 'Get $20 Rental rebate'
        },
        {
          img: require('../../../assets/images/rental-2.png'),
          amount: 15,
          infor: 'Get $500 Rental rebate'
        }
      ]
    },
    {
      title: 'Food and Beverage',
      listData: [
        {
          img: require('../../../assets/images/food-1.png'),
          amount: 25,
          infor: 'NTUC Fairprice $50 Voucher'
        },
        {
          img: require('../../../assets/images/food-2.png'),
          amount: 5,
          infor: 'Free Cold Stone Sundae at any flavour!'
        }
      ]
    }
  ]
  const availCoin = 340

  const numberWithCommas = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const renderHeader = () => {
    const header = "Silver Tier"
    const subHeader = "In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards."
    return (
      <View style={styles.blackContainer}>
        <TouchableOpacity style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/images/left-arrow.png')} style={{ width: 6, height: 12 }}/>
        </TouchableOpacity>
        <Text style={styles.titleHeader}>{header}</Text>
        <Text style={styles.subTitleHeader}>{subHeader}</Text>
      </View>
    )
  }

  const renderDynamicView = () => {
    const dynamicHeader = "Available Coin balance"
    const dynamicSubHeader = "You have paid rental fee for $1,200.\nPay more $800 to achieve Gold Tier."
    const viewTier = "View tier benefits"
    const myCoupons = "My Coupons"
    const updatedDate = "Updated : 02/11/2021"
    return (
      <View style={styles.dynamicContainer}>
        <ImageBackground source={require('../../../assets/images/image-BG.png')} resizeMode='cover' style={styles.BGcontainer}>
          <Text style={styles.dynamicTextHeader}>{dynamicHeader}</Text>
          <Text style={styles.availCoinText}>{availCoin}</Text>
          <Progress.Bar 
            progress={availCoin/500} 
            width={windowWidth - 80}
            height={5}
            color='#0062FF'
            unfilledColor='#E2E2EA'
            borderWidth={0}
            borderRadius={2.5}
            style={{marginTop: 33}}
          />
          <Text style={styles.dynamicSubText}>{dynamicSubHeader}</Text>
          <TouchableOpacity style={styles.viewTierBtn}>
            <Text style={styles.viewTierText}>{viewTier}</Text>
            <Image source={require('../../../assets/images/right-arrow.png')} style={{ width: 6, height: 12 }}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.myCouponsBtn}>
            <Text style={styles.myCouponsText}>{myCoupons}</Text>
          </TouchableOpacity>
          <Text style={styles.updatedText}>{updatedDate}</Text>
        </ImageBackground>
      </View>
    )
  }

  const renderSlide = () => {
    const insufficientCoins = 'Insufficient coins'
    return (
      <View style={{ marginTop: 264 }}>
        {dataSlide.map((itemSection, index) => {
          return (
            <View>
              <Text style={styles.titleSection}>{itemSection.title}</Text>
              <FlatList
                contentContainerStyle={{ paddingTop: 26, paddingBottom: 48 }}
                data={itemSection.listData}
                renderItem={({item, index}) => {
                  const isSufficient = availCoin >= item.amount
                  return (
                    <View style={{...styles.slideItem, marginRight: index + 1 == itemSection.listData.length ? 24 : 0}}>
                      <Image source={item.img} style={{ width: 200, height: 98 }} />
                      <View style={styles.coinTextContainer}>
                        {!isSufficient && <Image source={require('../../../assets/images/l-icon.png')} style={{ width: 16, height: 16, marginRight: 4 }} />}
                        <Text style={{...styles.coinText, color: isSufficient ? '#0062FF' : '#696974'}}>{numberWithCommas(item.amount) + ' Coins'}</Text>
                      </View>
                      <Text style={styles.inforItem} numberOfLines={isSufficient ? 3 : 2}>{item.infor}</Text>
                      {!isSufficient && <Text style={styles.insufficientText}>{insufficientCoins}</Text>}
                    </View>
                  )
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          )
        })}
      </View>
    )
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {renderHeader()}
      {renderDynamicView()}
      {renderSlide()}
    </ScrollView>
  );
}

export default DetailScreen;