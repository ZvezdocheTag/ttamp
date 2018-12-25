import React from 'react';
import { TextGroup } from './styles';

const Logo = props => (
  <svg width={139} height={29} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.7 9.03h-1.095c-2.044 0-3.546 1.738-3.546 3.65v3.64c0 1.912 1.502 3.65 3.546 3.65h1.094v3.705c0 2.758-1.809 4.502-4.616 4.502H5.473c-2.807 0-4.617-1.744-4.617-4.502v-3.704H1.95c2.044 0 3.547-1.738 3.547-3.651v-3.64c0-1.912-1.503-3.65-3.547-3.65H.856V5.326C.856 2.568 2.665.824 5.473.824h18.611c2.807 0 4.616 1.744 4.616 4.502V9.03zM15.743 25.442c3.569 0 6.46-2.848 6.46-6.362v-6.425c0-3.513-2.891-6.36-6.459-6.36h-1.932c-3.568 0-6.46 2.847-6.46 6.36v6.426c0 3.513 2.892 6.361 6.46 6.361h1.931z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.694 7.206h2.052l-.001.001c2.977 0 5.53 2.668 5.53 5.593v6.137c0 2.925-2.553 5.593-5.529 5.593h-2.052c-2.977 0-5.413-2.668-5.413-5.593v-6.138c0-2.925 2.436-5.593 5.413-5.593zm1.646 12.765c2.046 0 4.078-1.738 4.078-3.651v-3.64c0-1.912-2.032-3.65-4.078-3.65h-1.125c-2.045 0-4.078 1.738-4.078 3.651v3.64c0 1.912 2.033 3.65 4.078 3.65h1.125z"
      fill="#fff"
    />
    <path
      d="M14.846 18.147h-.104c-1.42 0-2.748-.813-2.748-2.26V14.52s-.002-.5-.468-.5c-.464 0-.46.5-.46.5v1.367c0 1.948 1.747 3.172 3.676 3.172h.104s.454-.007.454-.447c0-.442-.454-.465-.454-.465z"
      fill="#fff"
    />
    <TextGroup>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.069 18.496l.3 1.39v-.001h1.114v-6.66c0-1.139-.285-1.967-.856-2.484-.571-.516-1.448-.774-2.633-.774-.591 0-1.18.075-1.753.222-.56.139-1.1.345-1.61.615l.463 1.13c1.045-.498 1.982-.747 2.809-.747.739 0 1.274.182 1.609.547.336.365.503.931.503 1.697v.605l-1.686.052c-3.208.096-4.813 1.128-4.813 3.1 0 .919.28 1.629.839 2.128.559.498 1.33.748 2.316.748.738 0 1.352-.109 1.844-.326.492-.217.988-.631 1.482-1.242h.072zm-.892-.409c-.535.504-1.27.757-2.207.757-.592 0-1.052-.14-1.382-.418-.33-.28-.494-.686-.494-1.22 0-.684.265-1.187.793-1.51.529-.324 1.39-.507 2.587-.548l1.505-.062v.882c0 .909-.268 1.614-.802 2.119z"
        fill="#fff"
      />

      <path
        d="M53.666 19.886l-3.77-9.76h1.613l2.138 5.789c.484 1.353.768 2.23.852 2.635h.074c.066-.316.275-.966.629-1.954a793.72 793.72 0 0 1 2.38-6.47h1.613l-3.77 9.76h-1.76.001z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.843 6.739c-.17.156-.253.405-.253.744 0 .331.083.578.253.743.17.164.399.252.635.245a.887.887 0 0 0 .625-.245c.175-.165.263-.412.263-.743 0-.333-.088-.58-.263-.74a.898.898 0 0 0-.625-.24.893.893 0 0 0-.635.236zm1.377 13.146h-1.505v-9.758h1.505v9.758zM71.146 18.496l.299 1.39v-.001h1.115v-6.66c0-1.139-.285-1.967-.857-2.484-.571-.516-1.448-.774-2.632-.774-.592 0-1.18.075-1.754.222a7.11 7.11 0 0 0-1.61.615l.463 1.13c1.046-.498 1.982-.747 2.81-.747.738 0 1.273.182 1.608.547.336.365.503.931.503 1.697v.605l-1.685.052c-3.209.096-4.814 1.128-4.814 3.1 0 .919.281 1.629.84 2.128.558.498 1.331.748 2.315.748.738 0 1.353-.109 1.844-.326.493-.217.988-.631 1.483-1.242h.072zm-.893-.409c-.534.504-1.269.757-2.207.757-.592 0-1.052-.14-1.382-.418-.329-.28-.494-.686-.494-1.22 0-.684.265-1.187.793-1.51.529-.324 1.391-.507 2.588-.548l1.504-.062v.882c0 .909-.267 1.614-.802 2.119z"
        fill="#fff"
      />
      <path
        d="M81.975 17.223c0 .908-.344 1.609-1.033 2.102-.69.492-1.656.738-2.9.738-1.318 0-2.346-.204-3.083-.614v-1.372c.477.238.99.424 1.537.562a6.55 6.55 0 0 0 1.582.204c.784 0 1.39-.123 1.812-.369.423-.246.635-.623.635-1.126 0-.38-.168-.706-.503-.976-.336-.27-.99-.589-1.963-.956-.924-.34-1.581-.635-1.971-.886-.39-.253-.68-.539-.87-.86-.19-.32-.285-.703-.285-1.148 0-.796.329-1.424.988-1.884.658-.46 1.56-.69 2.71-.69 1.07 0 2.114.214 3.135.642l-.534 1.202c-.997-.404-1.901-.606-2.71-.606-.713 0-1.25.11-1.614.33-.362.218-.543.522-.543.908 0 .26.067.484.204.668.135.183.354.358.657.525.3.166.882.406 1.74.721 1.178.422 1.974.846 2.388 1.273.413.428.62.965.62 1.612z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M90.139 18.496l.298 1.39v-.001h1.115v-6.66c0-1.139-.285-1.967-.857-2.484-.57-.516-1.447-.774-2.632-.774-.591 0-1.18.075-1.753.222-.56.139-1.1.345-1.61.615l.463 1.13c1.045-.498 1.982-.747 2.809-.747.739 0 1.274.182 1.609.547.336.365.503.931.503 1.697v.605l-1.686.052c-3.208.096-4.813 1.128-4.813 3.1 0 .919.281 1.629.839 2.128.559.498 1.331.748 2.316.748.738 0 1.352-.109 1.844-.326.492-.217.987-.631 1.482-1.242h.073zm-.893-.409c-.535.504-1.27.757-2.207.757-.592 0-1.052-.14-1.382-.418-.33-.28-.494-.686-.494-1.22 0-.684.265-1.187.793-1.51.529-.324 1.391-.507 2.587-.548l1.505-.062v.882c0 .909-.268 1.614-.802 2.119z"
        fill="#fff"
      />
      <path d="M94.56 19.885h1.504V6.03H94.56v13.854z" fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M99.9 18.746c.849.877 2.008 1.317 3.476 1.317.671 0 1.243-.048 1.718-.147a8.061 8.061 0 0 0 1.509-.485v-1.318a8.14 8.14 0 0 1-3.172.66c-1.015 0-1.802-.298-2.361-.89-.559-.595-.854-1.465-.884-2.61h6.843v-.935c0-1.317-.363-2.379-1.088-3.183-.724-.805-1.71-1.206-2.954-1.206-1.33 0-2.389.462-3.177 1.389-.788.926-1.183 2.175-1.183 3.748 0 1.56.424 2.78 1.273 3.66zm1.161-6.794c.474-.511 1.111-.766 1.908-.766.785 0 1.389.247 1.812.743.423.495.635 1.21.635 2.143h-5.193c.084-.904.363-1.61.838-2.12z"
        fill="#fff"
      />
      <path
        d="M115.909 17.223c0 .908-.345 1.609-1.033 2.102-.689.492-1.655.738-2.9.738-1.318 0-2.345-.204-3.083-.614v-1.372c.478.238.99.424 1.537.562.517.132 1.048.2 1.582.204.785 0 1.39-.123 1.812-.369.423-.246.635-.623.635-1.126 0-.38-.168-.706-.503-.976-.336-.27-.99-.589-1.963-.956-.924-.34-1.581-.635-1.971-.886-.39-.253-.68-.539-.87-.86-.19-.32-.286-.703-.286-1.148 0-.796.33-1.424.989-1.884.659-.46 1.562-.69 2.709-.69 1.07 0 2.116.214 3.136.642l-.535 1.202c-.996-.404-1.9-.606-2.71-.606-.712 0-1.25.11-1.613.33-.363.218-.544.522-.544.908 0 .26.068.484.205.668.135.183.355.358.657.525.302.166.882.406 1.74.721 1.178.422 1.975.846 2.388 1.273.414.428.62.965.62 1.612M118.046 18.942c0-.399.093-.7.277-.904.184-.205.448-.307.792-.307.35 0 .625.102.82.307.197.204.296.505.296.904 0 .385-.1.682-.3.89-.2.207-.472.311-.816.311-.308 0-.562-.093-.766-.28-.202-.186-.303-.494-.303-.921zM127.642 9.949a6 6 0 0 1 1.187.106l-.207 1.372a5.207 5.207 0 0 0-1.088-.133c-.804 0-1.492.32-2.062.96-.571.641-.857 1.44-.857 2.396v5.235h-1.504v-9.759h1.241l.173 1.808h.072c.368-.636.812-1.126 1.332-1.47a3.033 3.033 0 0 1 1.713-.515zM132.008 10.127v6.33c0 .795.185 1.39.553 1.78.369.393.946.589 1.731.589 1.04 0 1.8-.28 2.28-.837.48-.558.72-1.469.72-2.734v-5.128h1.504v9.758h-1.24l-.218-1.308h-.082c-.308.48-.735.848-1.283 1.104-.546.254-1.17.382-1.87.382-1.21 0-2.114-.282-2.716-.845-.6-.564-.902-1.467-.902-2.707v-6.384h1.523z"
        fill="#fff"
      />
    </TextGroup>
  </svg>
);

export default Logo;
