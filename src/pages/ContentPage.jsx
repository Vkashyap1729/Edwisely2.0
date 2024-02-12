import { Stack, Box, Typography } from '@mui/material'
import {
  Worker,
  Viewer,
  RotateDirection,
  SpecialZoomLevel,
} from '@react-pdf-viewer/core'
import { useParams } from 'react-router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Plus from '../assets/svg/Plus'
import ExpandPdf from '../assets/svg/ExpandPdf'
import Minus from '../assets/svg/Minus'
import Rotatepdf from '../assets/svg/Rotatepdf'
import SideNavbarWithHeader from '../components/HOC/SideNavbarWithHeader'
import {
  fullScreenPlugin,
  RenderEnterFullScreenProps,
} from '@react-pdf-viewer/full-screen'
import {
  RenderCurrentScaleProps,
  RenderZoomInProps,
  RenderZoomOutProps,
  zoomPlugin,
} from '@react-pdf-viewer/zoom'
import { RenderRotateProps, rotatePlugin } from '@react-pdf-viewer/rotate'
import {
  pageNavigationPlugin,
  RenderCurrentPageLabelProps,
} from '@react-pdf-viewer/page-navigation'
import { useEffect } from 'react'
import { thumbnailPlugin } from '@react-pdf-viewer/thumbnail'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/thumbnail/lib/styles/index.css'
const ContentPage = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0
  }, [])
  const handleGoBack = () => {
    window.history.back()
  }

  const { url, courseName } = useParams()
  const pdfUrl = decodeURIComponent(url)
  const pdfCourseName = decodeURIComponent(courseName)
  const zoomPluginInstance = zoomPlugin()
  const { CurrentScale, ZoomIn, ZoomOut } = zoomPluginInstance
  const fullScreenPluginInstance = fullScreenPlugin()
  const { EnterFullScreen } = fullScreenPluginInstance
  const rotatePluginInstance = rotatePlugin()
  const { Rotate } = rotatePluginInstance
  const pageNavigationPluginInstance = pageNavigationPlugin()
  const thumbnailPluginInstance = thumbnailPlugin()
  const { Thumbnails } = thumbnailPluginInstance
  const { CurrentPageLabel } = pageNavigationPluginInstance

  return (
    <SideNavbarWithHeader>
      <Stack
        sx={{
          height: '56px',
          boxShadow: '10px 10px 32px 0px #1616160A',
        }}
      >
        <Stack
          direction={'row'}
          sx={{
            padding: '16px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Stack direction={'row'} spacing={'32px'}>
            <Box onClick={handleGoBack} className="isClickable">
              <ArrowBackIcon />
            </Box>
            <Typography
              sx={{
                fontSize: '15px',
                fontWeight: 500,
                lineHeight: '23px',
                letterSpacing: '0px',
                textAlign: 'left',
                color: '#252525',
              }}
            >
              {pdfCourseName}
            </Typography>
          </Stack>
          <Stack direction={'row'}>
            <Box
              sx={{
                padding: '0 24px 0 24px',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'space-around',
              }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '21px',
                  letterSpacing: '0px',
                  textAlign: 'center',
                  color: '#252525',
                }}
                s
              >
                <CurrentPageLabel>
                  {(props: RenderCurrentPageLabelProps) => (
                    <Stack
                      direction={'row'}
                      spacing={'8px'}
                      sx={{
                        padding: '0 24px 0 24px',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-around',
                          width: '24px',
                          height: '24px',
                          padding: '8px 7px 8px 7px',
                          bgcolor: '#F4F6F8',
                        }}
                      >
                        {props.currentPage + 1}
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-around',
                          width: '24px',
                          height: '24px',
                          padding: '8px 7px 8px 7px',
                        }}
                      >
                        /
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-around',
                          width: '24px',
                          height: '24px',
                          padding: '8px 7px 8px 7px',
                        }}
                      >
                        {props.numberOfPages}
                      </Box>
                    </Stack>
                  )}
                </CurrentPageLabel>
              </Typography>
            </Box>
            <Box
              sx={{
                borderLeft: '1px solid #BDBDC7',
                borderRight: '1px solid #BDBDC7',
                height: '24px',
              }}
            >
              <Stack
                direction={'row'}
                spacing={'16px'}
                sx={{
                  padding: '0 24px 0 24px',
                }}
              >
                <ZoomOut>
                  {(props: RenderZoomOutProps) => (
                    <Box onClick={props.onClick} className="isClickable">
                      <Minus />
                    </Box>
                  )}
                </ZoomOut>
                <Box
                  sx={{
                    display: 'flex',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    bgcolor: '#F4F6F8',
                    padding: '8px 7px 8px 7px',
                    width: '51px',
                    height: '24px',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 500,
                      lineHeight: '18px',
                      letterSpacing: '0px',
                      textAlign: 'center',
                      color: '#252525',
                    }}
                  >
                    <CurrentScale>
                      {(props: RenderCurrentScaleProps) => (
                        <>{`${Math.round(props.scale * 100)}%`}</>
                      )}
                    </CurrentScale>
                  </Typography>
                </Box>
                <ZoomIn>
                  {(props: RenderZoomInProps) => (
                    <Box onClick={props.onClick} className="isClickable">
                      <Plus />
                    </Box>
                  )}
                </ZoomIn>
              </Stack>
            </Box>
            <Stack
              direction={'row'}
              spacing={'16px'}
              sx={{
                padding: '0 24px 0 24px',
              }}
            >
              <EnterFullScreen>
                {(props: RenderEnterFullScreenProps) => (
                  <Box onClick={props.onClick} className="isClickable">
                    <ExpandPdf />
                  </Box>
                )}
              </EnterFullScreen>
              <Rotate direction={RotateDirection.Forward}>
                {(props: RenderRotateProps) => (
                  <Box className="isClickable" onClick={props.onClick}>
                    <Rotatepdf />
                  </Box>
                )}
              </Rotate>
            </Stack>
          </Stack>
          <Box></Box>
        </Stack>
      </Stack>

      <Stack direction={'row'} justifyContent={'space-between'}>
        <Box></Box>
        <Box
          sx={{
            flex: 1,
            maxWidth: '415px',
            width: '100%',
            height: '588px',
            position: 'relative',
            overflow: 'auto',
            margin: '21px',
          }}
        >
          <Box
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '20px', // Adjust the width to match the scrollbar width
              background: 'white', // Set the background color to match the container background
              zIndex: 1, // Make sure the overlay is above the scrollbar
            }}
          />
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
              fileUrl={pdfUrl}
              plugins={[
                zoomPluginInstance,
                fullScreenPluginInstance,
                rotatePluginInstance,
                pageNavigationPluginInstance,
                thumbnailPluginInstance,
              ]}
              defaultScale={SpecialZoomLevel.PageFit}
            />
          </Worker>
        </Box>
        <Box
          sx={{
            maxWidth: '150px',
            width: '100%',
            // height: '588px',
            height: '100%',
            overflow: 'auto',
            position: 'relative',
            margin: '32px',
          }}
        >
          <Box
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '20px', // Adjust the width to match the scrollbar width
              background: 'white', // Set the background color to match the container background
              zIndex: 1, // Make sure the overlay is above the scrollbar
            }}
          />
          <Thumbnails />
        </Box>
      </Stack>
    </SideNavbarWithHeader>
  )
}

export default ContentPage
