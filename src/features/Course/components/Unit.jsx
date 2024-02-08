import React from 'react'
import {
  Box,
  Stack,
  Typography,
  InputBase,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import Search from '../../../assets/svg/Search'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import FeedIcon from '@mui/icons-material/Feed'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import documentImg from '../../../assets/svg/AccordianContent.svg'
import { useNavigate } from 'react-router'
const Units = (props) => {
  const { units } = { ...props }
  const [idx, setIdx] = useState(0)
  const [clickedIndex, setClickedIndex] = useState(0)
  const handleTypographyClick = (index) => {
    setClickedIndex(index)
  }
  const navigate = useNavigate()
  const handelTopicClick = (url, name) => {
    navigate(`/content/${encodeURIComponent(url)}/${name}`)
  }
  const [searchInput, setSearchInput] = useState('')

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value)
  }
  return (
    <Box
      sx={{
        height: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
        my={2}
      >
        <Stack
          display={'flex'}
          direction="row"
          spacing={4}
          alignItems="center"
          position="relative"
        >
          {units.map((unit, index) => (
            <Typography
              onClick={() => setIdx(index)}
              key={unit.unit_id}
              sx={{
                color: clickedIndex === index ? '#0946C4' : '#919EAB',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: clickedIndex === index ? 600 : 300,
                lineHeight: 'normal',
                position: 'relative',
                alignItems: 'center',
                cursor: 'pointer',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: '0',
                  width: clickedIndex === index ? '55.5px' : '0',
                  height: '3px',
                  background: '#0946C4',
                  color: '#0946C4',
                  transition: 'width 0.1s ease-in-out',
                },
              }}
            >
              <Box
                height="24px"
                onClick={() => handleTypographyClick(index)}
              >{`${unit.unit_name}`}</Box>
            </Typography>
          ))}

          <InputBase
            placeholder="Search topics"
            startAdornment={<Search />}
            value={searchInput}
            onChange={handleSearchInputChange}
            sx={{
              borderRadius: '6.64px',
              border: '1px solid #F4F6F8',
              background: '#F4F6F8',
              display: 'flex',
              height: '35px',
              width: '144px',
              padding: '7.589px 9.486px',
              alignItems: 'center',
              gap: '11.383px',
              flexShrink: 0,
            }}
          />
        </Stack>
      </Box>
      <Box
        sx={{
          marginBottom: '42px',
          height: '100%',
        }}
      >
        {/* {Object.entries(units[idx].topics).map((item) => {
          return (
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {item[1].topic_name}
              </AccordionSummary>
              <AccordionDetails>
                {item[1].materials.map((material) => {
                  return (
                    <Stack
                      direction={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                    >
                      <Stack
                        direction={'row'}
                        spacing={'9px'}
                        alignItems={'center'}
                      >
                        <img
                          src={documentImg}
                          alt="document-svg "
                          width={'16px'}
                          height={'16px'}
                        />
                        <Typography>{material.name}</Typography>
                      </Stack>
                      <Stack
                        direction={'row'}
                        spacing={'10px'}
                        alignItems={'center'}
                        onClick={() => {
                          handelTopicClick(material.url, material.name)
                        }}
                        className="isClickable"
                      >
                        <Typography>Start</Typography>
                        <ArrowForwardIcon />
                      </Stack>
                    </Stack>
                  )
                })}
              </AccordionDetails>
            </Accordion>
          )
        })} */}
        {Object.entries(units[idx].topics).map((item) => {
          // Filter accordion summaries based on search input
          if (
            item[1].topic_name.toLowerCase().includes(searchInput.toLowerCase())
          ) {
            return (
              <Accordion key={item[0]}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    color: ' #919EAB',
                  }}
                >
                  {item[1].topic_name}
                </AccordionSummary>
                <AccordionDetails>
                  {item[1].materials.map((material) => {
                    return (
                      <Stack
                        key={material.url}
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                      >
                        <Stack
                          direction={'row'}
                          spacing={'9px'}
                          alignItems={'center'}
                        >
                          <img
                            src={documentImg}
                            alt="document-svg "
                            width={'16px'}
                            height={'16px'}
                          />
                          <Typography
                            sx={{
                              color: '#161C24',
                              fontSize: '14px',
                              fontWeight: 400,
                              lineHeight: '21px',
                              letterSpacing: '0em',
                              textAlign: 'left',
                            }}
                          >
                            {material.name}
                          </Typography>
                        </Stack>
                        <Stack
                          direction={'row'}
                          spacing={'10px'}
                          alignItems={'center'}
                          onClick={() => {
                            handelTopicClick(material.url, material.name)
                          }}
                          className="isClickable"
                        >
                          <Typography
                            sx={{
                              fontSize: '14px',
                              fontWeight: 400,
                              lineHeight: '21px',
                              letterSpacing: '0em',
                              textAlign: 'left',
                              color: '#0B58F5',
                            }}
                          >
                            Start
                          </Typography>
                          <ArrowForwardIcon sx={{ color: '#0B58F5' }} />
                        </Stack>
                      </Stack>
                    )
                  })}
                </AccordionDetails>
              </Accordion>
            )
          }
          return null
        })}
      </Box>
    </Box>
  )
}

export default Units
