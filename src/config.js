const tmdbEndpoint = "https://api-zingmp3.vercel.app/api"

export const tmdAPI = {
   //  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_ey=${apiKey}`,
   getHomePage: () => `${tmdbEndpoint}/home`,

   // get Zing Chart :
   getTopChart: () => `${tmdbEndpoint}/homechart`,

   // get RadioPage :
   getRadioPage: () => `${tmdbEndpoint}/radio`,

   // get New Feed :
   getNewFeed: (id, page) => `${tmdbEndpoint}/newfeeds?id=${id}&page=${page}`,

   // get Mới Phát Hành :
   getNewSong: () => `${tmdbEndpoint}/newreleasechart`,

   // get Thể Loại :
   getHubHome: () => `${tmdbEndpoint}/hubhome`,

   // get Top100Page :
   getTop100Page: () => `${tmdbEndpoint}/top100`,

   // get List Mv :
   getListMv: (id, page) => `${tmdbEndpoint}/listmv?id=${id}&page=${page}&count=19`,

   // get Category Mv :
   getCategoryMv: (id) => `${tmdbEndpoint}/categorymv/${id}`,

   //  get từ khóa hot :
   getHotKeyApi: () => `${tmdbEndpoint}/recommendkeyword`,

   // lấy key gợi ý :
   getHotSuggestionApi: (keyword) => `${tmdbEndpoint}/suggestionkeyword?keyword=${keyword}`,

   //  bắt đầu search :
   getSearchAllKeyApi: (keyword) => `${tmdbEndpoint}/searchall?keyword=${keyword}`,
}
