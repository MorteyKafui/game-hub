import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatforms'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'


export interface GameQuery {
  genre: Genre | null,
  platform: Platform | null,
  sortOrder: string, searchText: string
}



const App = () => {

  const [gameQuery, SetGameQuery] = useState<GameQuery>({} as GameQuery)


  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }} templateColumns={{
        base: '1fr', lg: '200px 1fr'
      }}>
        <GridItem area="nav" >
          <Navbar onSearch={searchText => SetGameQuery({ ...gameQuery, searchText })} />
        </GridItem>
        <Show above='lg'>
          <GridItem area="aside" paddingX={5} >
            <GenreList onSelectGenre={genre => SetGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre} />
          </GridItem>
        </Show>
        <GridItem area="main" >
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={platform => SetGameQuery({ ...gameQuery, platform })} />
              </Box>
              <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={sortOrder => SetGameQuery({ ...gameQuery, sortOrder })} />
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>

      </Grid>


    </>
  )
}

export default App
