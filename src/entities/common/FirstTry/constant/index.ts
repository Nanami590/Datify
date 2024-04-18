import { StringHelper } from "@/utils/helpers/Index";
import { EMOJI_LIST } from "../../constant";

export const FirstTryStepSixCards = [
  { name: "Travel", emoji: StringHelper.getEmoji(EMOJI_LIST.AIRPLANE) },
  { name: "Cooking", emoji: StringHelper.getEmoji(EMOJI_LIST.COOKING) },
  { name: "Hiking", emoji: StringHelper.getEmoji(EMOJI_LIST.MOUNTAIN) },
  { name: "Yoga", emoji: StringHelper.getEmoji(EMOJI_LIST.YOGA) },
  { name: "Gaming", emoji: StringHelper.getEmoji(EMOJI_LIST.VIDEO_GAME) },
  { name: "Movies", emoji: StringHelper.getEmoji(EMOJI_LIST.MOVIE_CAMERA) },
  { name: "Photography", emoji: StringHelper.getEmoji(EMOJI_LIST.CAMERA) },
  { name: "Music", emoji: StringHelper.getEmoji(EMOJI_LIST.MISIC) },
  { name: "Pets", emoji: StringHelper.getEmoji(EMOJI_LIST.PET) },
  {
    name: "Painting",
    emoji: StringHelper.getEmoji(EMOJI_LIST.ARTIST_PALLETE),
  },
  { name: "Art", emoji: StringHelper.getEmoji(EMOJI_LIST.ARTIST_PALLETE) },
  { name: "Fitness", emoji: StringHelper.getEmoji(EMOJI_LIST.FITNESS) },
  { name: "Reading", emoji: StringHelper.getEmoji(EMOJI_LIST.BOOK) },
  { name: "Dancing", emoji: StringHelper.getEmoji(EMOJI_LIST.DANCING) },
  { name: "Sport", emoji: StringHelper.getEmoji(EMOJI_LIST.BASKETBALL) },
  { name: "Board Games", emoji: StringHelper.getEmoji(EMOJI_LIST.DICE) },
  { name: "Technology", emoji: StringHelper.getEmoji(EMOJI_LIST.PHONE) },
  { name: "Fashion", emoji: StringHelper.getEmoji(EMOJI_LIST.DRESS) },
  {
    name: "Motorcycling",
    emoji: StringHelper.getEmoji(EMOJI_LIST.MOTORCYCLE),
  },
].map((item, index) => ({
  ...item,
  id: index + 1,
}));
