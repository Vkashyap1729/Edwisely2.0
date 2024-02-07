import React from 'react'
import { Stack, Box, Typography, Button } from '@mui/material'
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
  RenderGoToPageProps,
  RenderCurrentPageLabelProps,
  NumberOfPages,
} from '@react-pdf-viewer/page-navigation'
import { useEffect } from 'react'
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
  console.log(pdfCourseName)
  console.log('the url is ', pdfUrl)

  const zoomPluginInstance = zoomPlugin()
  const { CurrentScale, ZoomIn, ZoomOut } = zoomPluginInstance
  const fullScreenPluginInstance = fullScreenPlugin()
  const { EnterFullScreen } = fullScreenPluginInstance
  const rotatePluginInstance = rotatePlugin()
  const { Rotate } = rotatePluginInstance
  const pageNavigationPluginInstance = pageNavigationPlugin()

  const { CurrentPageInput, CurrentPageLabel, NumberOfPages } =
    pageNavigationPluginInstance

  return (
    <SideNavbarWithHeader>
      <Stack
        spacing={1}
        sx={{
          height: '56px',
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
          <Stack direction={'row'} spacing={2}>
            <ArrowBackIcon onClick={handleGoBack} />
            <Typography>{pdfCourseName}</Typography>
          </Stack>
          <Stack direction={'row'} spacing={2}>
            <Typography>
              <CurrentPageLabel>
                {(props: RenderCurrentPageLabelProps) => (
                  <span>{`${props.currentPage + 1} of ${
                    props.numberOfPages
                  }`}</span>
                )}
              </CurrentPageLabel>
            </Typography>
            <Box
              sx={{
                borderLeft: '1px solid #BDBDC7',
                borderRight: '1px solid #BDBDC7',
              }}
            >
              <Stack
                direction={'row'}
                spacing={3}
                sx={{
                  paddingLeft: 2,
                  paddingRight: 2,
                }}
              >
                <ZoomOut>
                  {(props: RenderZoomOutProps) => (
                    <button
                      style={{
                        backgroundColor: '#357edd',
                        border: 'none',
                        borderRadius: '4px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        padding: '8px',
                      }}
                      onClick={props.onClick}
                    >
                      Zoom out
                    </button>
                  )}
                </ZoomOut>
                <Typography>
                  <CurrentScale>
                    {(props: RenderCurrentScaleProps) => (
                      <>{`${Math.round(props.scale * 100)}%`}</>
                    )}
                  </CurrentScale>
                </Typography>
                <ZoomIn>
                  {(props: RenderZoomInProps) => (
                    <button
                      style={{
                        backgroundColor: '#357edd',
                        border: 'none',
                        borderRadius: '4px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        padding: '8px',
                      }}
                      onClick={props.onClick}
                    >
                      Zoom in
                    </button>
                  )}
                </ZoomIn>
              </Stack>
            </Box>
            <Stack direction={'row'} spacing={3}>
              <EnterFullScreen>
                {(props: RenderEnterFullScreenProps) => (
                  <button
                    style={{
                      backgroundColor: '#357edd',
                      border: 'none',
                      borderRadius: '4px',
                      color: '#ffffff',
                      cursor: 'pointer',
                      padding: '8px',
                    }}
                    onClick={props.onClick}
                  >
                    Enter fullscreen
                  </button>
                )}
              </EnterFullScreen>
              <Rotate direction={RotateDirection.Forward}>
                {(props: RenderRotateProps) => (
                  <button
                    style={{
                      backgroundColor: '#357edd',
                      border: 'none',
                      borderRadius: '4px',
                      color: '#ffffff',
                      cursor: 'pointer',
                      padding: '8px',
                    }}
                    onClick={props.onClick}
                  >
                    Rotate forward
                  </button>
                )}
              </Rotate>
            </Stack>
          </Stack>
          <Box></Box>
        </Stack>
      </Stack>
      <Box
        sx={{
          width: '100%',
          height: 'calc(100vh - 56px)',
          overflow: 'auto',
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Box height={'100%'}>
            <Viewer
              fileUrl={pdfUrl}
              plugins={[
                zoomPluginInstance,
                fullScreenPluginInstance,
                rotatePluginInstance,
                pageNavigationPluginInstance,
              ]}
              defaultScale={SpecialZoomLevel.PageFit}
            />
          </Box>
        </Worker>
      </Box>
    </SideNavbarWithHeader>
  )
}

export default ContentPage
