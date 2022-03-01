import { getChapter as nettruyen } from "../nettruyen/chapter";
import { getChapter as lxhentai } from "../lxhentai/chapter";
import { store } from "../../store";

export const getChapter = async (comicSLug: any, chapterSLug: any, chapterId: any): Promise<any> => {
    const state = store.getState();
    switch (state.source) {
        case '1':
            return nettruyen(comicSLug, chapterSLug, chapterId); //nettruyen
        case '2':
            return nettruyen(comicSLug, chapterSLug, chapterId); //nhattruyen
        case '3':
            return lxhentai(comicSLug, chapterSLug, chapterId); //lxhentai
    }
}