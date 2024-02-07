const DashboardIcon = ({ stroke, fill }) => {
  return (
    <div>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="8" fill={fill} />
        <path
          d="M30 16.27V12.23C30 10.64 29.36 10 27.77 10H23.73C22.14 10 21.5 10.64 21.5 12.23V16.27C21.5 17.86 22.14 18.5 23.73 18.5H27.77C29.36 18.5 30 17.86 30 16.27Z"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.5 16.52V11.98C18.5 10.57 17.86 10 16.27 10H12.23C10.64 10 10 10.57 10 11.98V16.51C10 17.93 10.64 18.49 12.23 18.49H16.27C17.86 18.5 18.5 17.93 18.5 16.52Z"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.5 27.77V23.73C18.5 22.14 17.86 21.5 16.27 21.5H12.23C10.64 21.5 10 22.14 10 23.73V27.77C10 29.36 10.64 30 12.23 30H16.27C17.86 30 18.5 29.36 18.5 27.77Z"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M23 23.5H29"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M23 27.5H29"
          stroke={stroke}
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  )
}
export default DashboardIcon
