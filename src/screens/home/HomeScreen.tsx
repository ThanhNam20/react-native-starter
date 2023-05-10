import React, { useContext, useEffect, useMemo } from "react";
import { FlatList, Image, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import createStyles from "./HomeScreen.style";
import MockData from "./mock/MockData";
import CardItem from "./components/card-item/CardItem";
/**
 * ? Shared Imports
 */
import { REACT_QUERY_KEY, SCREENS } from "@shared-constants";
import Text from "@shared-components/text-wrapper/TextWrapper";
import fonts from "@fonts";
import { AppContext } from "contexts/app.context";
import { asyncStorage } from "utils/storage";
import { useQuery } from "@tanstack/react-query";
import { getExtensionConfig } from "@services/apis/common.api";

const profileURI =
  // eslint-disable-next-line max-len
  "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { data } = useQuery({
    queryKey: [REACT_QUERY_KEY.EXTENSION_CONFIG],
    queryFn: getExtensionConfig,
  });

  // const { profile } = useContext(AppContext);

  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const handleItemPress = () => {
    NavigationService.push(SCREENS.DETAIL);
  };

  const handleOpenDrawer = () => {
    navigation.toggleDrawer()
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const MenuButton = () => (
    <RNBounceable onPress={handleOpenDrawer}>
      <Icon
        name="menu"
        type={IconType.Ionicons}
        color={colors.iconBlack}
        size={30}
      />
    </RNBounceable>
  );

  const Header = () => (
    <View style={styles.header}>
      <MenuButton />
      <Image
        resizeMode="cover"
        source={{ uri: profileURI }}
        style={styles.profilePicImageStyle}
      />
    </View>
  );

  const List = () => (
    <View style={styles.listContainer}>
      <FlatList
        data={MockData}
        renderItem={({ item }) => (
          <CardItem data={item} onPress={handleItemPress} />
        )}
      />
    </View>
  );

  const Welcome = () => (
    <>
      <Text h1 bold color={colors.text}>
        Hello Kuray
      </Text>
      <Text
        fontFamily={fonts.montserrat.lightItalic}
        color={colors.placeholder}
      >
        Welcome Back
      </Text>
    </>
  );

  const Content = () => (
    <View style={styles.contentContainer}>
      <Welcome />
      <List />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Content />
    </SafeAreaView>
  );
};

export default HomeScreen;
